import { gql, useQuery } from '@apollo/client';
const GET_MEMBERS = gql`
  query GetMembers {
    member {
      id
      member_name
    }
  }
`;

export default function Member() {
  const { loading, error, data } = useQuery(GET_MEMBERS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.members.map(member => <li key={member.id}>{member.member_name}</li>)}
    </ul>
  );
}