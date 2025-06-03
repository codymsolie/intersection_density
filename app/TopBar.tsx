import Link from 'next/link'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function TopBar() {
	return (
		<header className="row-start-1 row-end-2 grid grid-cols-2 items-center">
			<Link href="#" className="col-start-1 text-xl font-semibold">
				Intersection Density for Permutation Groups
			</Link>
			<div className="flex col-start-2 gap-4 justify-self-end text-gray-600">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="ghost">Background</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Background</DialogTitle>
							<DialogDescription>
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4">
							<div>
							</div>
							<div>
							</div>
						</div>
						<DialogFooter>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="ghost">About | Further Work</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>About</DialogTitle>
							<DialogDescription>
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4">
							<div>
								Our aim is to provide a comprehensive, searchable dataset of intersection 
								density/group properties for the transitive permutation groups enumerated in GAP.
								&nbsp;
								<a 
									target="_blank" 
									href="https://docs.gap-system.org/pkg/transgrp/doc/manual.pdf"
									rel="noopener noreferrer"
									className="transition text-gray-600 hover:text-gray-500"
								>(Alexander Hulpke)</a>
							</div>
							<div>
								The work to fill out this dataset and build the UI was done 
								by Cody Solie during NSERC USRA's in S/S 2024 and S/S 2025.
							</div>
							<div className="text-lg font-semibold">Further Work</div>
							<div>
								As of June 2025, we are working to complete our dataset for all of the 4952 
								transitive groups with degree less than 24. If you have results for groups 
								that are not actively listed on this webpage, please refer to the 
								"Contact/Contribute" tab; we would love to add your results to our table!
							</div>
						</div>
						<DialogFooter>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="ghost">Contact | Contribute</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Contact | Contribute</DialogTitle>
							<DialogDescription>
							</DialogDescription>
						</DialogHeader>
						<div>
							<div className="text-md font-semibold italic">
								"I have new data to add to this website..."
							</div>
							<div className="text-md font-semibold italic">
								"I want you to expand your dataset to include..."
							</div>
							<div className="p-6">
								Please contact Dr. Karen Meagher: <u>karen (dot) meagher (at) uregina (dot) ca </u>
							</div>
						</div>
						<div>
							<div className="text-md font-semibold italic">
								"This website is broken or is acting funny..."
							</div>
							<div className="p-6">
								Sincerest apologies! Please contact Dr. Karen Meagher by email at the address
								given above, and preferably CC Cody Solie: <u>codymsolie (at) gmail (dot) com</u>
							</div>
						</div>
						<DialogFooter>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</header>
	)
}
