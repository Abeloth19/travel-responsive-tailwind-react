import React from 'react';
import Carousel from './components/carousel';
import Places from './components/places';
import Footer from './components/footer';
import Head from './components/head';
import Navbar from './components/navbar';
import Search from './components/search';
import Select from './components/select';

function App() {
  return (
    <div>
      <Navbar />
      <Head />
      <Places />
      <Search />
      <Select />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
