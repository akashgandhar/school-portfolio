"use client"
import { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Image from "next/image";
import Modal from './Modal';
import Slider from '@/components/Slider';
const images = [
  {
    "src": "/gallery/8.jpeg",
    "original": "/gallery/1.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/9.jpeg",
    "original": "/gallery/9.jpeg",
    "width": 320,
    "height": 212
  },
  {
    "src": "/gallery/10.jpeg",
    "original": "/gallery/10.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/11.jpeg",
    "original": "/gallery/11.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/12.jpeg",
    "original": "/gallery/12.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/13.jpeg",
    "original": "/gallery/13.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/14.jpeg",
    "original": "/gallery/14.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/15.jpeg",
    "original": "/gallery/15.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/16.jpeg",
    "original": "/gallery/16.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/17.jpeg",
    "original": "/gallery/17.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/18.jpeg",
    "original": "/gallery/18.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/19.jpeg",
    "original": "/gallery/19.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/20.jpeg",
    "original": "/gallery/20.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/21.jpeg",
    "original": "/gallery/21.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/22.jpeg",
    "original": "/gallery/22.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/23.jpeg",
    "original": "/gallery/23.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/24.jpeg",
    "original": "/gallery/24.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/25.jpeg",
    "original": "/gallery/25.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/26.jpeg",
    "original": "/gallery/26.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/27.jpeg",
    "original": "/gallery/27.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/28.jpeg",
    "original": "/gallery/28.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/29.jpeg",
    "original": "/gallery/29.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/30.jpeg",
    "original": "/gallery/30.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/31.jpeg",
    "original": "/gallery/31.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/32.jpeg",
    "original": "/gallery/32.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/33.jpeg",
    "original": "/gallery/33.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/34.jpeg",
    "original": "/gallery/34.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/35.jpeg",
    "original": "/gallery/35.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/36.jpeg",
    "original": "/gallery/36.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/37.jpeg",
    "original": "/gallery/37.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/38.jpeg",
    "original": "/gallery/38.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/39.jpeg",
    "original": "/gallery/39.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/40.jpeg",
    "original": "/gallery/40.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/41.jpeg",
    "original": "/gallery/41.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/42.jpeg",
    "original": "/gallery/42.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/43.jpeg",
    "original": "/gallery/43.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/44.jpeg",
    "original": "/gallery/44.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/45.jpeg",
    "original": "/gallery/45.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/46.jpeg",
    "original": "/gallery/46.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/47.jpeg",
    "original": "/gallery/47.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/48.jpeg",
    "original": "/gallery/48.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/49.jpeg",
    "original": "/gallery/49.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/50.jpeg",
    "original": "/gallery/50.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/51.jpeg",
    "original": "/gallery/51.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/52.jpeg",
    "original": "/gallery/52.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/53.jpeg",
    "original": "/gallery/53.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/54.jpeg",
    "original": "/gallery/54.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/55.jpeg",
    "original": "/gallery/55.jpeg",
    "width": 320,
    "height": 174
  },
  {
    "src": "/gallery/56.jpeg",
    "original": "/gallery/56.jpeg",
    "width": 320,
    "height": 174
  }
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const renderPhoto = ({ photo, layoutOptions }) => (
    <div className="p-2 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleImageClick(photo)}>
      <Image
        src={photo.src}
        alt=""
        width={photo.width}
        height={photo.height}
        layout="responsive"
      />
    </div>
  );

  return (
    <div className="p-9">
      <div className="flex py-9">
      <Slider/>
      </div>
      <PhotoAlbum
      className="pt-9"
        layout="rows"
        photos={images}
        renderPhoto={renderPhoto}
        defaultContainerWidth={1200}
        sizes={{ size: "calc(100vw - 2400px)" }}
      />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img
          className="max-w-full max-h-[70vh] object-contain mx-auto"
            src={selectedImage.original}
            alt=""
            // width={selectedImage.width}
            // height={selectedImage.height}
            // layout="responsive"
          />
        </Modal>
      )}
    </div>
  );
}