import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export function FilterAccordion({
	categories,
	setSelectedCategory,
	selectedCategory
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
			{/* <AccordionItem value='price'>
				<AccordionTrigger className='text-base font-semibold'>
					Цена
				</AccordionTrigger>
				<AccordionContent>
					<div />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='size'>
				<AccordionTrigger className='text-base font-semibold'>
					Размер
				</AccordionTrigger>
				<AccordionContent>
					<div className='grid gap-2'>
						<Label className='flex items-center gap-2 font-normal'>
							<Checkbox
							// onCheckedChange={() => handleFilterChange('size', 'S')}
							/>
							S
						</Label>
						<Label className='flex items-center gap-2 font-normal'>
							<Checkbox
							// onCheckedChange={() => handleFilterChange('size', 'M')}
							/>
							M
						</Label>
						<Label className='flex items-center gap-2 font-normal'>
							<Checkbox
							// onCheckedChange={() => handleFilterChange('size', 'L')}
							/>
							L
						</Label>
						<Label className='flex items-center gap-2 font-normal'>
							<Checkbox
							// onCheckedChange={() => handleFilterChange('size', 'XL')}
							/>
							XL
						</Label>
					</div>
				</AccordionContent>
			</AccordionItem> */}
		</Accordion>
	)
}
