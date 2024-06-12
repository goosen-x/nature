import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowUpDownIcon } from '@/components/icons/ArrowUpDownIcon'

export function SortDropdown({ sort, setSort }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='shrink-0'>
					<ArrowUpDownIcon className='mr-2 h-4 w-4' />
					Сортировать
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-[200px]' align='end'>
				<DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
					<DropdownMenuRadioItem value='low'>
						Цена: дешевле
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='high'>
						Цена: дороже
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='alphabet'>
						По алфавиту
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
