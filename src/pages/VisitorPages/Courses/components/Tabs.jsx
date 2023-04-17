import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabsComponent({ props }) {

  const data = React.useMemo(() => {
    let data__ = []
    if (props?.details) {
      props?.details?.map((i , index)=>{
        data__.push({
          label:i?.title,
          value: index,
          desc: i?.blob_data,
        })
        return index
      })
    }
    return data__
  })
  return (

    <Tabs value={0}>
      <TabsHeader>
        {data?.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data?.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
