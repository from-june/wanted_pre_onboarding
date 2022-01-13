import { atom, useAtom } from 'jotai';

const imageWidth = atom(1060);

const useGetClientWidth = () => {
  const [navBarWidth, setNavBarWidth] = useAtom(imageWidth);

  return { navBarWidth, setNavBarWidth };
};

export default useGetClientWidth;
