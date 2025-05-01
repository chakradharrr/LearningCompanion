import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";  // Import ReactMarkdown

function Summary({ data }) {
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchSummary = () => {
        setIsLoading(true);
        axios.post("http://127.0.0.1:5000/generate-content", { 
            pdf_text: data,
            prompt_type: "3"
        })
        .then(response => {
            console.log(response.data.generated_text);
            setSummary(response.data.generated_text);
        })
        .catch(error => {
            console.error("Error summarizing text:", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div>
            <button onClick={fetchSummary} className="inline-btn" disabled={isLoading}>
                {isLoading ? "Summarizing..." : "Get Summary"}
            </button>

            {summary && (
                <div className="globalcontainer mt-3">
                    <ReactMarkdown children={summary} />  {/* Render the markdown */}
                </div>
            )}
        </div>
    );
}

export default Summary;
