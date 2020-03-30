import icons from '../../icons';
import { Tool } from './tool';

export const ToolList = ({ tools }) => (
	`<div class="tool-list">
		<ul>
			${Object.keys(tools).map(tool => (
				`<li>
						${Tool({ 
							Icon: icons[tools[tool].icon], 
							tool,
						})}
				</li>`
			)).join('')}
		</ul>
	</div>`
);
