import icons from '../../icons';
import { Tool } from './tool';

export const ToolList = ({ tools, handleClick }) => (
	`<div class="tool-list">
		<ul>
			${Object.keys(tools).map(tool => (
				`<li>
						${Tool({ 
							Icon: icons[tools[tool].icon], 
							handleClick: () => handleClick(tools[tool]) 
						})}
				</li>`
			)).join('')}
		</ul>
	</div>`
);
