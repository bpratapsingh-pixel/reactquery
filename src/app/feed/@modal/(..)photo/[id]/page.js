"use client";

import React from "react";
import PhotoModalComponent from "@/components/feed/PhotoModal";

export default function PhotoModal({ params }) {
    const { id } = React.use(params);
    return <PhotoModalComponent id={id} />;
}
