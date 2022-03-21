import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home(){
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ], []
    );

    const [userStats, setUserStats] = useState([]);
}