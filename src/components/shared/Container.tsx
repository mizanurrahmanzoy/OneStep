type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;