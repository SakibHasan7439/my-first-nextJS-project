export default async function GetAllPosts(){
    const result = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=20'
        );

    return result.json();
}