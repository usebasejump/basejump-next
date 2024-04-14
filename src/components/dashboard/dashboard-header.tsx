import Link from "next/link";
import UserAccountButton from "@/components/basejump/user-account-button";
import BasejumpLogo from "@/components/getting-started/basejump-logo";
import NavigatingAccountSelector from "@/components/dashboard/navigation-account-selector";


interface Props {
    accountId: string;
    navigation?: {
        name: string;
        href: string;
    }[]
}
export default function DashboardHeader({accountId, navigation = []}: Props) {

    return (
        <nav className="w-full p-4 flex justify-between items-center border-b">
            <div className="flex justify-start items-center gap-x-4 lg:gap-x-6">
                <div className="flex items-center gap-x-4">
                    <BasejumpLogo logoOnly />
                    <span className="border-l rotate-12 h-6" />
                    <NavigatingAccountSelector accountId={accountId} />
                </div>
                {navigation.map((navItem) => (
                    <Link key={navItem.name} href={navItem.href} className="text-sm font-medium transition-colors hover:text-primary">
                        {navItem.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-x-4">
                <UserAccountButton />
            </div>
        </nav>
    )

}