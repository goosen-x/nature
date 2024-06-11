import { HeroSection } from '@/components/sections/HeroSection'
import { AdvantagesSection } from '@/components/sections/AdvantagesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AdvantagesSection />
			<ProductsSection />
			<ReviewsSection />
			<ContactSection />
		</div>
	)
}
