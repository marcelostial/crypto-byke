/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.uol.cryptobike.core.models.NFTCards;
import com.uol.cryptobike.core.models.Nossosnfts;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Nossosnfts.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/nossosnfts")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class NossosnftsImpl
    implements Nossosnfts
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String maintitle;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<NFTCards> nftcards;
    @SlingObject
    private Resource resource;

    @Override
    public String getMaintitle() {
        return maintitle;
    }

    @Override
    public List<NFTCards> getNftcards() {
        return nftcards != null ? Collections.unmodifiableList(nftcards) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
