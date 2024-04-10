persons = [
    {"name": "nishika", "age": 22, "city": "New York"},
    {"name": "parth", "age": 23, "city": "San Francisco"},
    {"name": "isha", "age": 21, "city": "Los Angeles"},
    {"name": "janvi", "age": 25, "city": "Chicago"},
    {"name": "swati", "age": 40, "city": "Austin"}
]

filtered_persons = [person for person in persons if person['age'] >= 25]

sorted_persons = sorted(filtered_persons, key=lambda x: x['city'])

for person in sorted_persons:
    print(person)
