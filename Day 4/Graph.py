events = [
    ("User_A", "Home"),
    ("User_A", "Product_1"),
    ("User_A", "Cart"),
    ("User_B", "Home"),
    ("User_B", "Product_1"),
    ("User_B", "Product_2"),
    ("User_C", "Home"),
    ("User_C", "Product_2")
]

graph = {}

def add_edge(graph, node1, node2):
    if node1 not in graph:
        graph[node1] = []
    
    if node2 not in graph:
        graph[node2] = []
    
    graph[node1].append(node2)
    graph[node2].append(node1)

for user, page in events:
    add_edge(graph, user, page)

print(graph)