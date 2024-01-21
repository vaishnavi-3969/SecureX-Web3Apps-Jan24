import { useEffect, useState } from "react"

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos)
            console.log(memos)
        }
        contract && memosMessage()
    }, [contract])
    return (
        <div
            style={{
                background: "#1a202c",
                color: "#fff",
                padding: "2rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
        >
            <h2 style={{ fontSize: "1.875rem", marginBottom: "1.5rem", fontWeight: "600" }}>
                Memos
            </h2>
            {memos.length > 0 ? (
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "1px solid #f6e05e",
                        borderRadius: "0.375rem",
                        overflow: "hidden",
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    padding: "0.75rem",
                                    backgroundColor: "#646cffaa",
                                    color: "#d2d6dc",
                                    borderBottom: "1px solid #f6e05e",
                                }}
                            >
                                Name
                            </th>
                            <th
                                style={{
                                    padding: "0.75rem",
                                    backgroundColor: "#646cffaa",
                                    color: "#d2d6dc",
                                    borderBottom: "1px solid #f6e05e",
                                }}
                            >
                                Message
                            </th>
                            <th
                                style={{
                                    padding: "0.75rem",
                                    backgroundColor: "#646cffaa",
                                    color: "#d2d6dc",
                                    borderBottom: "1px solid #f6e05e",
                                }}
                            >
                                Timestamp
                            </th>
                            <th
                                style={{
                                    padding: "0.75rem",
                                    backgroundColor: "#646cffaa",
                                    color: "#d2d6dc",
                                    borderBottom: "1px solid #f6e05e",
                                }}
                            >
                                From
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {memos.map((memo, i) => (
                            <tr
                                key={i}
                                style={{
                                    backgroundColor: i % 2 === 0 ? "#ffd700" : "#ffedba",
                                    color: "#1a202c",
                                }}
                            >
                                <td style={{ padding: "0.75rem", borderBottom: "1px solid #f6e05e" }}>
                                    {memo.name}
                                </td>
                                <td style={{ padding: "0.75rem", borderBottom: "1px solid #f6e05e" }}>
                                    {memo.message}
                                </td>
                                <td style={{ padding: "0.75rem", borderBottom: "1px solid #f6e05e" }}>
                                    {new Date(memo.timestamp * 1000).toLocaleString()}
                                </td>
                                <td style={{ padding: "0.75rem", borderBottom: "1px solid #f6e05e" }}>{memo.from}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={{ color: "#8b949e" }}>No memos found.</p>
            )}
        </div>

    )
}

export default Memos