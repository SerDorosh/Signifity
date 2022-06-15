import React, { useEffect, useState } from 'react'

const mobileSize = 460; 
const tabletSize = 720;
const laptopSize = 1024;
const bigLaptopSize = 1200;
const desktopSize = 1420;

export default function ScreenSize() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= mobileSize);
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth > mobileSize && window.innerWidth <= tabletSize);
  const [isLaptop, setIsLaptop] = useState<boolean>(window.innerWidth > mobileSize && window.innerWidth <= laptopSize);
  const [isBigLaptop, setIsBigLaptop] = useState<boolean>(window.innerWidth > mobileSize && window.innerWidth <= bigLaptopSize);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > bigLaptopSize);

  const resizeHandler = (): void => {
    setIsMobile(window.innerWidth <= mobileSize);
    setIsTablet(window.innerWidth > mobileSize && window.innerWidth <= tabletSize)
    setIsLaptop(window.innerWidth > mobileSize && window.innerWidth <= laptopSize);
    setIsBigLaptop(window.innerWidth > mobileSize && window.innerWidth <= bigLaptopSize);
    setIsDesktop(window.innerWidth > bigLaptopSize);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);

  return (
   { isMobile,
    isTablet,
    isLaptop,
    isBigLaptop,
    isDesktop }
  )
}
