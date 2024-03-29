import styles from '@/app/styles/home.module.css';
<div className={styles.shape} />;
import Navbar from '@/app/components/navbar';
import { Metadata } from 'next';
import SellersPage from './SellerPage';
import './SellerPage.css';
export const metadata: Metadata = {
  title: 'Handcrafted Haven | Sellers',
};

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col p-6 bg-lightGreen">
        
        <Navbar />
        <SellersPage/>

      </main>
    )
  }