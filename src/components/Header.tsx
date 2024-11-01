import {Breadcrumbs, Button, ButtonGroup, Heading} from "@aws-amplify/ui-react";
import React from 'react';
import {FaChevronRight, FaSearch} from "react-icons/fa";
import './Header.css';
import {useLocation, useNavigate} from "react-router-dom";

interface Breadcrumb {
	toPath: string;
	label: string;
}

export const Header: React.FC = () => {
	const {pathname} = useLocation();
	const navigate = useNavigate()
	const paths = pathname.split('/').filter(Boolean);

	const breadcrumbs = paths.reduce<Breadcrumb[]>((crumbs, currentPath, index) => {
		const toPath = index === 0 ? `/${currentPath}` : `${crumbs[index - 1].toPath}/${currentPath}`;
		const label = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
		return [...crumbs, {toPath, label}];
	}, []);

	if (breadcrumbs.length === 0) {
		breadcrumbs.push({toPath: '', label: 'Map'});
	}

	return (
		<header className="header-bar">
			<Breadcrumbs.Container>
				{...breadcrumbs.map(({toPath, label}, index) =>
					<Breadcrumbs.Item>
						<Heading level={index === 0 ? 3 : 5}>
							<Breadcrumbs.Link
								onClick={() => navigate(toPath)}
								isCurrent={index === breadcrumbs.length - 1}>
								{label}
							</Breadcrumbs.Link>
						</Heading>
						{index === breadcrumbs.length - 1
							? null
							: <Breadcrumbs.Separator>
								<FaChevronRight size={10}></FaChevronRight>
							</Breadcrumbs.Separator>}
					</Breadcrumbs.Item>
				)}
			</Breadcrumbs.Container>

			<ButtonGroup justifyContent={'space-between'} alignItems={'center'}>
				<Button
					className={'icon-button'}
					size={'large'}
				>
					<FaSearch/>
				</Button>
			</ButtonGroup>
		</header>
	);
};