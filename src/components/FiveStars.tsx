import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function FiveStars({ color }: { color: string }) {
  return (
    <div>
      <StarIcon sx={{ color: color }} />
      <StarIcon sx={{ color: color }} />
      <StarIcon sx={{ color: color }} />
      <StarIcon sx={{ color: color }} />
      <StarHalfIcon sx={{ color: color }} />
    </div>
  );
}

export default FiveStars;
