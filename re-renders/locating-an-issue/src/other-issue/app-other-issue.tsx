import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import DynamicScroll from "./components/dynamic-scroll";
import { SlowComponent } from "./components/slow-component";

export default function AppOtherIssue() {
  return (
    <DynamicScroll>
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </DynamicScroll>
  );
}
