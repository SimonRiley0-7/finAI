"use client";

import React, { useState } from "react";
import { toast } from "sonner"; // Assuming you're using sonner for toast

const useFetch = (cb) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false); // Initialize with false instead of null
    const [error, setError] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const response = await cb(...args);
            setData(response);
            return response; // Return the response for convenience
        }
        catch (error) {
            setError(error);
            toast.error(error.message || "An error occurred");
            throw error; // Re-throw so callers can handle it if needed
        } finally {
            setLoading(false);
        }
    }
    
    return { data, loading, error, fn, setData };
}

export default useFetch;