import {ScrollView, View} from "@aws-amplify/ui-react";
import {useState} from 'react';
import './RootLayout.css';
import {Header} from "../components/Header.tsx";
import SideBar from "../components/SideBar.tsx";

type LayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({children}: LayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<View className="layout">
			<SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>

			<View className="main-content">
				<Header/>
				<ScrollView className={'scroll-content'}>
					{children}
				</ScrollView>
			</View>
		</View>
	);
}