import Caroussel from "@/components/caroussel";
import CategoryCaroussel from "@/components/caroussel/categoryCaroussel";
import Header from "@/components/Header/header";
import ScreenWrapper from "@/components/screen-wrapper";
import { metallicaAlbums, spotifyCategories } from "@/mocks/albums";
import React from "react";

export default function index() {
  return (
    <ScreenWrapper>
      <Header />
      <CategoryCaroussel categories={spotifyCategories} />
      <Caroussel title="Metallica" albums={metallicaAlbums} />
      <Caroussel title="Metallica" albums={metallicaAlbums} />
      <Caroussel title="Metallica" albums={metallicaAlbums} />
      <Caroussel title="Metallica" albums={metallicaAlbums} />
    </ScreenWrapper>
  );
}
