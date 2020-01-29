<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * TabProductDetails
 *
 * @ORM\Table(name="tab_product_details")
 * @ORM\Entity
 */
class TabProductDetails
{
    /**
     * @var string
     *
     * @ORM\Column(name="reference", type="string", length=20, nullable=false)
     */
    private $reference;

    /**
     * @var float
     *
     * @ORM\Column(name="weight", type="float", precision=10, scale=0, nullable=false)
     */
    private $weight;

    /**
     * @var string
     *
     * @ORM\Column(name="material", type="string", length=30, nullable=false)
     */
    private $material;

    /**
     * @var string
     *
     * @ORM\Column(name="gender", type="string", length=10, nullable=false)
     */
    private $gender;

    /**
     * @var \TabProduct
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="TabProduct")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id", referencedColumnName="id")
     * })
     */
    private $id;


    /**
     * Set reference.
     *
     * @param string $reference
     *
     * @return TabProductDetails
     */
    public function setReference($reference)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference.
     *
     * @return string
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set weight.
     *
     * @param float $weight
     *
     * @return TabProductDetails
     */
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * Get weight.
     *
     * @return float
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set material.
     *
     * @param string $material
     *
     * @return TabProductDetails
     */
    public function setMaterial($material)
    {
        $this->material = $material;

        return $this;
    }

    /**
     * Get material.
     *
     * @return string
     */
    public function getMaterial()
    {
        return $this->material;
    }

    /**
     * Set gender.
     *
     * @param string $gender
     *
     * @return TabProductDetails
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender.
     *
     * @return string
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set id.
     *
     * @param \TabProduct $id
     *
     * @return TabProductDetails
     */
    public function setId(\TabProduct $id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get id.
     *
     * @return \TabProduct
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Parse Doctrine values into Array
     */
    public function intoArray()
    {
        return array(
            'produit' => $this->getId()->intoArray(),
            'reference' => $this->getReference(),
            'weight' => $this->getWeight(),
            'material' => $this->getMaterial(),
            'gender' => $this->getGender()
        );
    }
}
