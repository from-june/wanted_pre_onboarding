import { atom, useAtom } from 'jotai';
import { IMAGE_WIDTH } from 'components/utility/constants';

const imageWidth = atom(IMAGE_WIDTH);

const useGetClientWidth = () => {
  const [navBarWidth, setNavBarWidth] = useAtom(imageWidth);

  return { navBarWidth, setNavBarWidth };
};

export default useGetClientWidth;
