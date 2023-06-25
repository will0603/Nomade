import Banner from "@/components/atoms/Banner/Banner";
import Contacto from "@/components/organisms/Contacto/Contacto";
import Layout from "@/components/organisms/Layout/Layout";
import MotoCard from "@/components/organisms/MotoCard/MotoCard";
import React, { Component } from "react";

const Principal = () => {
    return(
        <div>
            <Contacto/>
            {/* <Layout/> */}
            <Banner/>
            <MotoCard />
        </div>
    );
};

export default Principal;