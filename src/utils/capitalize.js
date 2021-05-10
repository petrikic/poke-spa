export default function captalize (str) {
  return str ? str[0].toUpperCase() + str.substring(1) : undefined;
}
