export default function healthIndication(person) {
  if (person.health > 50) {
    return 'healthy';
  }
  if (person.health > 15 && person.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
