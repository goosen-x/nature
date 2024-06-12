import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { RadioGroup } from '@radix-ui/react-radio-group'

export function FilterAccordion({
	categories,
	setSelectedCategory,
	selectedCategory,
	setPriceRange,
	selectedPriceRange
}) {
	const filterCategories = categories.filter(category => category !== '')

	return (
		<Accordion type='single' collapsible>
			<AccordionItem value='category'>
				<AccordionTrigger className='text-base font-semibold'>
					Категории
				</AccordionTrigger>
				<AccordionContent>
					<div className='grid gap-2'>
						{filterCategories.map(category => (
							<Label
								key={category}
								className='flex items-center gap-2 font-normal'
							>
								<Checkbox
									checked={selectedCategory === category}
									onCheckedChange={() =>
										setSelectedCategory(
											selectedCategory === category ? '' : category
										)
									}
								/>
								{category}
							</Label>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='price'>
				<AccordionTrigger className='text-base font-semibold'>
					Цена
				</AccordionTrigger>
				<AccordionContent>
					<RadioGroup
						className='grid gap-2'
						value={selectedPriceRange}
						onValueChange={setPriceRange}
					>
						<Label className='flex items-center gap-2 font-normal'>
							<RadioGroupItem value='all' />
							Все
						</Label>
						<Label className='flex items-center gap-2 font-normal'>
							<RadioGroupItem value='under1000' />
							До 1000 рублей
						</Label>
						<Label className='flex items-center gap-2 font-normal'>
							<RadioGroupItem value='1000to3000' />
							От 1000 до 3000 рублей
						</Label>
						<Label className='flex items-center gap-2 font-normal'>
							<RadioGroupItem value='over3000' />
							Более 3000 рублей
						</Label>
					</RadioGroup>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
