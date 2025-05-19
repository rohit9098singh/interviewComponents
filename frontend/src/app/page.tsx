import Authentication from "./components/authentication/Authentication";
import Chips from "./components/chips/Chips";
import GoogleSearchBar from "./components/GoogleSearchBar/GoogleSearchBar";
import MortageCalender from "./components/MortageCalender/MortageCalender";
import Otp from "./components/Otp/page";
import Pagination from "./components/pagination/Pagination";
import PasswordStrength from "./components/PasswordStrength/PasswordStrength";
import Practice from "./components/practice/Practice";
import Progress from "./components/Progress/Progress";
import Sidebar from "./components/sidebar/Sidebar";
import Tabs from "./components/Tabs/Tabs";
import Todo from "./components/Todo/Todo";

export default function Home() {
  return (
    <div className=""> 
      {/* <Tabs/>
      <GoogleSearchBar/> */}
       {/* <Otp/> */}
       {/* <Chips/> */}
       {/* <Practice/> */}
       {/* <Todo/> */}
       {/* <Progress/> */}
       {/* <Pagination/> */}
       {/* <Authentication/> */}
       {/* <MortageCalender/> */}
       <PasswordStrength/>
    </div>
  );
}
