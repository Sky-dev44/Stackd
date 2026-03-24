import Footer from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import { SearchFilters } from "@/components/search/search-filter";
import React from "react";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      //Because of depth:1 the doc will be a type of category
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  console.log({
    data,
    formattedData,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
