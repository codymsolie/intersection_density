import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function TopBar() {
	return (
		<header className="row-start-1 row-end-2 grid grid-cols-2 items-center">
			<a href="" className="col-start-1 text-xl font-semibold">Intersection Density for Transitive Permutation Groups</a>
			<div className="flex col-start-2 gap-4 justify-self-end text-gray-600">
				<Button variant="ghost" asChild>
					<Link href="background.pdf">Background</Link>
				</Button>
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
								by Cody Solie during NSERC USRA&apos;s in S/S 2024 and S/S 2025,
								under the supervision of Dr. Karen Meagher.

							</div>
							<div className="text-lg font-semibold">Further Work</div>
							<div>
								As of June 2025, we are working to complete our dataset for all of the 4952 
								transitive groups with degree less than 24. If you have results for groups 
								that are not actively listed on this webpage, please refer to the 
								&quot; Contact/Contribute &quot; tab; we would love to add your results to our table!
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
								&quot;I have new data to add to this website...&quot;
							</div>
							<div className="text-md font-semibold italic">
								&quot;I want you to expand your dataset to include...&quot;
							</div>
							<div className="p-6">
								Please contact Karen Meagher: <u>meagherk (at) uregina (dot) ca </u>
							</div>
						</div>
						<div>
							<div className="text-md font-semibold italic">
								&quot;This website is broken or is acting funny...&quot;
							</div>
							<div className="p-6">
								Sincerest apologies! Please contact Karen Meagher at the address
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
