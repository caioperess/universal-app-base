import { GluestackUIProvider } from '@repo/components';
import { Home } from './app/home';
import './global.css';

export default function App() {
  return (
    <GluestackUIProvider>
      <Home />
    </GluestackUIProvider>
  );
}
