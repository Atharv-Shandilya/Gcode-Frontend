export default function ProfileCard() {
  return (
    <section className="w-[300px] border border-black/10 p-3 rounded-xl cursor-pointer">
      <div className="h-[280px] mb-2">
        <img
          src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/91365a016ded4746bbe95d1ab5bf0e0edYzCG.webp"
          className=" object-cover w-full h-full object-top rounded-xl"
        />
      </div>

      <div className="flex justify-between items-center">
        <h2 className=" font-semibold mb-1">Nihar Malali</h2>
        <p className="text-sm">21 yrs Exp</p>
      </div>

      <p className=" text-black/80 text-sm line-clamp-2 mb-1">
        Principal Solutions Architect | Senior Director | Senior Leadership at
        National Life Group
      </p>
      <p className=" text-black/80 text-sm">
        220 Sessions <span>(7 reviews)</span>
      </p>
    </section>
  );
}
