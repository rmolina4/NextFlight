type PlaneBGProps = {
  children: React.ReactNode;
};

export default function Plane(props: PlaneBGProps) {
  return (
    <div
      className="h-full w-full min-h-screen bg-cover bg-no-repeat bg-center bg-[url('../assets/nick-morales-BwYcH78rcpI-unsplash.jpg')] bg-[right_-6rem_bottom_-95rem]
 overflow-hidden"
    >
      {props.children}
    </div>
  );
}
