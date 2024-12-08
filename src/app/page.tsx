import Header from "@/components/header";
import Home2 from "@/components/home2";
import Instagram from "@/components/instagram";
import Newarrivals from "@/components/newarrivals";
import Ourblogs from "@/components/ourblogs";
import Toppicks from "@/components/toppicks";

export default function Home() {
  return (
    <div>
      <Header />
      <Home2/>
      <Toppicks/>
      <Newarrivals/>
      <Ourblogs/>
      <Instagram/>
    </div>
  );
}
