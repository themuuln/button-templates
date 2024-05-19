import Corner from './Corner';

const Corners = ({ isHovering }: { isHovering: boolean }) => {
  return (
    <>
      <Corner isHovering={isHovering} position='left-top' />
      <Corner isHovering={isHovering} position='right-top' />
      <Corner isHovering={isHovering} position='left-bottom' />
      <Corner isHovering={isHovering} position='right-bottom' />
    </>
  );
};

export default Corners;
