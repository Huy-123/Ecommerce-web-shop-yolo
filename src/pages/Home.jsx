import React from 'react';
import { Link } from 'react-router-dom';

import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import productData from '../assets/fake-data/products';
import banner from "../assets/images/banner.png"

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import PolicyCard from "../components/PolicyCard"
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';

function Home() {
	return (
		<Helmet title="Trang chủ">
			{/* Hero slider */}
			<HeroSlider 
				data={heroSliderData}
				control={true}
				auto = {true}
				timeOut = {5000}
			/>
			{/* End Hero slider */}

			{/* Policy Section */}
			<Section>
				<SectionBody>
					<Grid
						col={4}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						{policy.map((item, index) => (
							<Link key={index} to="/policy">
								<PolicyCard key={index} {...item}/>
							</Link>
						))}
					</Grid>
				</SectionBody>
			</Section>	

			<Section>
				<SectionTitle>
					top sản phẩm bán chạy trong tuần
				</SectionTitle>
				<SectionBody>
					<Grid
						col={4}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						{
							productData.getProducts(4).map((item, index)=>(
								<ProductCard
									key={index}
									img01={item.image01}
									img02={item.image02}
									name={item.title}
									price={Number(item.price)}
									slug={item.slug}
								/>
							))
						}
					</Grid>
				</SectionBody>
			</Section>
			{/* End Policy Section */}
			
			{/* New Arrival Section */}
			<Section>
				<SectionTitle>
					sản phẩm mới
				</SectionTitle>
				<SectionBody>
					<Grid
						col={4}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						{
							productData.getProducts(8).map((item, index)=>(
								<ProductCard
									key={index}
									img01={item.image01}
									img02={item.image02}
									name={item.title}
									price={Number(item.price)}
									slug={item.slug}
								/>
							))
						}
					</Grid>
				</SectionBody>
			</Section>
			{/* End New Arrival Section */}

			{/* Banner */}
			<Section>
				<SectionBody>
					<Link to="/catalog">
						<img src={banner} alt="" />
					</Link>
				</SectionBody>
			</Section>
			{/* End Banner */}

			{/* Popular Product Section */}
			<Section>
				<SectionTitle>
					phổ biến
				</SectionTitle>
				<SectionBody>
					<Grid
						col={4}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						{
							productData.getProducts(12).map((item, index)=>(
								<ProductCard
									key={index}
									img01={item.image01}
									img02={item.image02}
									name={item.title}
									price={Number(item.price)}
									slug={item.slug}
								/>
							))
						}
					</Grid>
				</SectionBody>
			</Section>
			{/* End Popular Product Section */}

		</Helmet>
	);
}

export default Home;