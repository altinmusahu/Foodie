'use client';

export default function Error({error}) {
    return(
        <main className="error">
            <h1>An error ocurred!</h1>
            <p>Failed to fetch the meal data, please try again later!</p>
        </main>
    );
}