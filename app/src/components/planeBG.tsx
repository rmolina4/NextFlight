type PlaneBGProps = {
  children: React.ReactNode;
};

export default function Plane(props: PlaneBGProps) {
  return (
    <div
      className="w-full min-h-screen bg-[url('../assets/nick-morales-BwYcH78rcpI-unsplash.jpg')] bg-[right_-6rem_bottom_-95rem]
 overflow-hidden" style={{ backgroundSize: "130%" }}
    >
      {props.children}
      </div>
  );
}
