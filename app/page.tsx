import Image from 'next/image';
import HeroPage from './components/HeroPage';
import Pagination from './components/Pagination';


export default function Home({searchParams}: {searchParams: {page:string}}) {
  return (
    <div>
    <main>
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)}/>
      <HeroPage />
    </main>
    </div>
  )
}
