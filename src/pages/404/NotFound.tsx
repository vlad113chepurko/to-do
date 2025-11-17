import "./NotFound.css";
import { useNavigate } from "react-router";
import { Button } from "@/ui/button";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      404 - Page Not Found
      <Button variant="secondary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </div>
  );
}
