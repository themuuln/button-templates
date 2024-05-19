type Props = {
  position: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';
  isHovering: boolean;
};

const Corner = ({ position = 'right-top', isHovering }: Props) => {
  const baseStyles = `transition-all duration-300 ${isHovering ? 'bg-zinc-800' : 'bg-white'} absolute z-10`;
  const vertical = `h-[8px] w-[2px]`;
  const horizontal = `h-[2px] w-[8px]`;

  if (position === 'left-top') {
    return (
      <div className='h-2 w-2 left-0 top-0 absolute'>
        <div className={`${vertical} ${isHovering ? `left-2 top-2` : 'left-0 top-0'} ${baseStyles}`} />
        <div className={`${horizontal} ${isHovering ? `top-2 -right-2` : 'top-0 right-0'} ${baseStyles}`} />
      </div>
    );
  } else if (position === 'left-bottom') {
    return (
      <div className={`h-2 w-2 left-0 bottom-0 absolute`}>
        <div className={`${vertical} ${isHovering ? `left-2 bottom-2` : 'left-0 bottom-0'}  ${baseStyles}`} />
        <div className={`${horizontal} ${isHovering ? `left-2 bottom-2` : 'left-0 bottom-0'} ${baseStyles}`} />
      </div>
    );
  } else if (position === 'right-top') {
    return (
      <div className={`h-2 w-2 right-0 top-0 absolute`}>
        <div className={`${vertical} ${isHovering ? `right-2 top-2` : 'right-0 top-0'} ${baseStyles}`} />
        <div className={`${horizontal} ${isHovering ? `right-2 top-2` : 'top-0 right-0'} ${baseStyles}`} />
      </div>
    );
  } else if (position === 'right-bottom') {
    return (
      <div className={`h-2 w-2 right-0 bottom-0 absolute`}>
        <div className={`${vertical} ${isHovering ? `right-2 -top-2` : 'right-0 top-0'} ${baseStyles}`} />
        <div className={`${horizontal} ${isHovering ? `right-2 bottom-2` : 'bottom-0 right-0'} ${baseStyles}`} />
      </div>
    );
  }
};

export default Corner;
