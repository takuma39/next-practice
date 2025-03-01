import { getContacts, getContact } from '@/lib/contact'

export default async function ListPage() {
  const contacts = await getContacts()
  const first = await getContact('1')
  return (
    <div>
      <p>複数</p>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}：{contact.email}
          </li>
        ))}
      </ul>
      <p>1件</p>
      <div>{first ? first.name : 'データがありません'}</div>
    </div>
  )
}
