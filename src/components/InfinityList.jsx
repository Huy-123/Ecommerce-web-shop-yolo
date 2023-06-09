import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'
import ProductCard from './ProductCard'

function InfinityList(props) {

	const perLoad = 6; // items each Load

	const listRef = useRef(null)

	const [data, setData] = useState([])

	const [load, setLoad] = useState(true)

	const [index, setIndex] = useState(0)

	useEffect(()=>{
		setData(props.data.slice(0, perLoad))
		setIndex(1)
	},[props.data])

	useEffect(()=>{
		window.addEventListener("scroll", () => {
			if(listRef && listRef.current){
				if(window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200){
					setLoad(true)
				}	
			}
		})
		// console.log('listRef: ', listRef);	
		// console.log('listRef.current.clientHeight: ', listRef.current.clientHeight);
		// console.log('listRef.current.offsetTop: ', listRef.current.offsetTop);
	},[listRef])

	useEffect(() => {
		const getItems = () => {
			
			let pages = Math.floor(props.data.length / perLoad)  // total page
			if(props.data.length < perLoad){
				pages = 1;
			} ///////========== Acaution

			const maxIndex = (props.data.length % perLoad === 0 ? pages : pages + 1)

			if(load && index <= maxIndex){
				const start = perLoad * index;
				// console.log('start: ', start);
				const end = start + perLoad;
				// console.log('end: ', end);

				setData(data.concat(props.data.slice(start, end)))
				setIndex(index + 1)

			}


		}
		getItems()
		setLoad(false)
	},[load, index, data, props.data])

  return (
	<div ref={listRef}>
		<Grid
			col={3}
			mdCol={2}
			smCol={1}
			gap={20}
		>
			{data.map((item, index) => (
				<ProductCard
					key={index}
					img01={item.image01}
					img02={item.image02}
					name={item.title}
					price={Number(item.price)}
					slug={item.slug}
				/>
			))}
		</Grid>
	</div>
  )
}

InfinityList.propTypes = {
	data: PropTypes.array.isRequired
}

export default InfinityList
