import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import './ChatComponent.css';

// todo
const theme = {
	background: 'white',
	headerBgColor: '#a48e65',
	headerFontSize: '20px',
	botBubbleColor: '#cad8de',
	headerFontColor: 'white',
	botFontColor: 'black',
	userBubbleColor: '#44758b',
	userFontColor: 'white',
};

// bot avatar can be added here
const config = {
	floating: true,
};

function ChatComponent() {
	return (
		<div className="chat-component">
			<ThemeProvider theme={theme}>
				<ChatBot


					headerTitle="Help Chat"
					steps={[
						{
							id: '0',
							message: "Hi, how can I help you today?",

							trigger: '1',
						}, {
							id: '1',

							user: true,
							trigger: '2'
						}, {
							id: '2',

							message: "Sorry, no agents are available at the moment. Please contact us at (613)-333-4444 for guidance.",
							trigger: '3',
						}, {
							id: '3',

							user: true,
							trigger: 2
						}
					]}
					{...config}
				/>
			</ThemeProvider>
		</div>
	);
}

export default ChatComponent;
