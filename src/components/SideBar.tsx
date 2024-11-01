import {Heading, View} from "@aws-amplify/ui-react";
import {FaCaretLeft, FaCaretRight, FaGear, FaMap, FaPeopleGroup, FaToiletPortable, FaUserGroup} from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import {FaExclamationCircle} from "react-icons/fa";

type SidebarProps = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

export default function SideBar({isOpen, toggleSidebar}: SidebarProps) {
	return (
		<View className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
			<View className="sidebar-header">
				<Heading level={1} fontWeight={500}>{isOpen ? 'Sent Network Map' : 'SNM'}</Heading>
			</View>

			<nav className="sidebar-nav">
				<button onClick={toggleSidebar} className={'sidebar-toggle'}>
					{isOpen ? <FaCaretLeft/> : <FaCaretRight/>}
				</button>
				<ul>
					<li>
						<NavLink to="/" title={'Map'}>
							<FaMap fontSize={'1.5rem'}/>
							<span className={'link-text'}>Map</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/devices" title={'Devices'}>
							<FaToiletPortable fontSize={'1.5rem'}/>
							<span className={'link-text'}>Devices</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/customers" title={'Customers'}>
							<FaUserGroup fontSize={'1.5rem'}/>
							<span className={'link-text'}>Customers</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/alerts" title={'Alerts'}>
							<FaExclamationCircle fontSize={'1.5rem'}/>
							<span className={'link-text'}>Alerts</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/users" title={'Users'}>
							<FaPeopleGroup fontSize={'1.5rem'}/>
							<span className={'link-text'}>Users</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/settings" title={'Settings'}>
							<FaGear fontSize={'1.5rem'}/>
							<span className={'link-text'}>Settings</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</View>
	);
}