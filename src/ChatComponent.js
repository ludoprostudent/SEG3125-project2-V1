import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import './ChatComponent.css';

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

const config = {
	floating: true,
};

function ChatComponent() {
	const { t } = useTranslation();

	return (
		<div className="chat-component">
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle={t('chat-header')}
					steps={[
						{
							id: '0',
							message: t('chat-welcome'),
							trigger: '1',
						}, {
							id: '1',
							user: true,
							trigger: '2'
						}, {
							id: '2',
							message: t('chat-no-agents'),
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
